import PostCard from "./cards/postCard";
import Masonry from "react-masonry-css";
import { RootState } from "../Statemanagement/store";
import { useDispatch, useSelector } from "react-redux";
import {  initializePostsReducer } from "../Statemanagement/Slices/postSlice";
import { fetchPosts } from "../apiRequests/fetchingRequest";
import { useState, useEffect, useReducer } from "react";
import React from "react";
import { Poster } from "../Statemanagement/interfaces";
import ToolBar from "../uitls/toolbar";
export interface Filters {
    empty: boolean;
    date: {
      startDate: string | null;
      endDate: string | null;
    };
    price: {
      min: string | null;
      max: string | null;
    };
    sortOrder: string | null;
    categories: string[] | null;
  }
  
  export interface FilterAction {
    type: string;
    value: string;
  }
  
  // Initial state
  const initialFilters: Filters = {
    empty: true,
    date: {
      startDate: null,
      endDate: null,
    },
    price: {
      min: null,
      max: null,
    },
    sortOrder: null,
    categories: null,
  };
  
  // Reducer
  const filtersReducer = (state: Filters, action: FilterAction): Filters => {
    switch (action.type) {
      case "RESET":
        return initialFilters;
      case "STARTDATE":
        return {
          ...state,
          date: {
            ...state.date,
            startDate: action.value,
          },
        };
      case "ENDDATE":
        return {
          ...state,
          date: {
            ...state.date,
            endDate: action.value,
          },
        };
      case "MINPRICE":
        return {
          ...state,
          price: {
            ...state.price,
            min: action.value,
          },
        };
      case "MAXPRICE":
        return {
          ...state,
          price: {
            ...state.price,
            max: action.value,
          },
        };
      case "SORTORDER":
        return {
          ...state,
          sortOrder: action.value,
        };
      case "CATEGORIES":
        return {
          ...state,
          categories: state.categories ? [...state.categories, action.value] : [action.value],
        };
      default:
        return state;
    }
  };

  const applyFilter = (state: Poster[], filters: Filters) => {
    if (!filters.empty) {
        let filtered = [...state];

        if (filters.date.startDate) {
            const start = new Date(filters.date.startDate);
            filtered = filtered.filter(poster => new Date(poster?.date) >= start);
        }

        if (filters.date.endDate) {
            const end = new Date(filters.date.endDate);
            filtered = filtered.filter(poster => new Date(poster?.date) <= end);
        }

        if (filters.categories && filters.categories.length > 0) {
            filtered = filtered.filter(poster => filters.categories!.includes(poster.category));
        }

        if (filters.price.min !== null) {
            filtered = filtered.filter(poster => poster.price >= Number(filters.price.min));
        }

        if (filters.price.max !== null) {
            filtered = filtered.filter(poster => poster.price <= Number(filters.price.max));
        }

        if (filters.sortOrder === "HIGH TO LOW ") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (filters.sortOrder === "LOW TO HIGH") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }

    return state;
};

const Posts = React.memo(({ category }: { category: string }) => {
    const state = useSelector((state: RootState) => state?.postSliceState);
    const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters);
   
    const filterData = applyFilter(state,filters);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>();
    useEffect(() => {
       
        if (Object.keys(state).length === 0 && loading !== true) {
            setLoading(true);
            fetchPosts()
                .then((posts) => {
                    // console.log("posters are here", posts);
                    dispatch(initializePostsReducer(posts));
                })
                .catch((err) => {
                    console.error("Error fetching posts:", err);
                })
                .finally(() => {
                    setLoading(false);
                });
        } 
    }, [loading,state,category,dispatch]);

    const breakpointColumns = {
        default: 4,
        1000: 3,
        440: 2,
    };

    return (
        <>
           { state.length > 0 ? (
                <>
                    <ToolBar filters={filters} dispatchFilters={dispatchFilters} />
                    {filterData.length > 0 ? (
                        <Masonry
                            breakpointCols={breakpointColumns}
                            className="flex"
                            columnClassName="space-y-1"
                        >
                            {filterData?.map((poster) => (
                                <PostCard post={poster} key={poster._id} />
                            ))}
                        </Masonry>
                    ) : (
                        "No results found"
                    )}
                </>
            ) : (
                loading && (
                    <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
                        <span className='sr-only'>Loading...</span>
                        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                    </div>
                )
            )}

        </>
    );
});

export default Posts;

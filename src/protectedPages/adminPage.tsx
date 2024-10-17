import AdminPosts from "./reusableAdminComponents/adminPosts";
import AddPost from "./reusableAdminComponents/addNewPostButton";
import { Toaster } from "react-hot-toast";

function admin() {
    return (
        <>
            <Toaster position="top-right"
            />
            <div className="">
                <AdminPosts />
                <AddPost />
            </div>

        </>
    );
}

export default admin;

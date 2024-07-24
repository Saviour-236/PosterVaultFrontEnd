import AdminPosts from "../adminRouteComponents/reusableAdminComponents/adminPosts";
import AddPost from "../adminRouteComponents/reusableAdminComponents/addNewPostButton";
import { Toaster } from "react-hot-toast";

function admin() {
    return (
        <>
            <Toaster position="top-right"
            /><div className="h-[90vh]">
                <AdminPosts />
                <AddPost />
            </div>

        </>
    );
}

export default admin;

import AdminPosts from "./reusableAdminComponents/adminPosts";
import AddPost from "./reusableAdminComponents/addNewPostButton";

function admin() {
    return (
        <>
            
            <div className="">
                <AdminPosts />
                <AddPost />
            </div>

        </>
    );
}

export default admin;

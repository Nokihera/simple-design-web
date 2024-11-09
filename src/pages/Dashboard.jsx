import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app, db } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const auth = getAuth(app);
  const navigate = useNavigate();

  // Fetch posts and messages
  const fetchPosts = async () => {
    const postsSnapshot = await getDocs(collection(db, "courses"));
    const postsList = postsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const sortedPosts = postsList.sort((a, b) => b.timestamp - a.timestamp);
    setPosts(sortedPosts);
  };

  const fetchMessages = async () => {
    const messagesSnapshot = await getDocs(collection(db, "messages"));
    const messagesList = messagesSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const sortedMessages = messagesList.sort((a, b) => b.timestamp - a.timestamp);
    setMessages(sortedMessages);
  };

  const deleteItem = async (type, id) => {
    try {
      if (type === "post") {
        await deleteDoc(doc(db, "courses", id));
        setPosts(posts.filter((post) => post.id !== id));
        toast.success("Post successfully deleted!");
      } else if (type === "message") {
        await deleteDoc(doc(db, "messages", id));
        setMessages(messages.filter((message) => message.id !== id));
        toast.success("Message successfully deleted!");
      }
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleAddPost = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser && newPost.title && newPost.content) {
        await addDoc(collection(db, "courses"), {
          title: newPost.title,
          content: newPost.content,
          author: currentUser.email,
          timestamp: serverTimestamp(),
        });
        setNewPost({ title: "", content: "" });
        fetchPosts(); // Refresh posts
        toast.success("Post successfully added!");
      }
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => console.error("Error logging out: ", error));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setLoading(false);
        fetchPosts();
        fetchMessages();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Toaster position="top-center"/>
        {/* Top Bar with Logout */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-700">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Add Post Section */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Add New Post</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <button
              onClick={handleAddPost}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Add Post
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <CollapsibleSection title="Manage Posts">
          <Table data={posts} columns={["Title", "Author", "Actions"]} onDelete={(id) => deleteItem("post", id)} />
        </CollapsibleSection>

        {/* Messages Section */}
        <CollapsibleSection title="Manage Messages" className="mt-8">
          <Table data={messages} columns={["Sender", "Message", "Actions"]} onDelete={(id) => deleteItem("message", id)} />
        </CollapsibleSection>
      </div>
    </div>
  );
};

// Collapsible Section Component
const CollapsibleSection = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className={`${className} border-b pb-4`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-2xl font-medium text-gray-800">{title}</h2>
        <span className="text-gray-500">{isOpen ? "▼" : "►"}</span>
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </section>
  );
};

// Table Component
const Table = ({ data, columns, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-300">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col} className="text-left py-3 px-4 font-semibold text-gray-600">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((item) => (
              <tr key={item.id} className="border-b last:border-none hover:bg-gray-50">
                <td className="py-3 px-4">{item.title || item.email}</td>
                <td className="py-3 px-4 truncate">{item.author || item.message}</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-red-600 hover:text-red-700" onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-3 px-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

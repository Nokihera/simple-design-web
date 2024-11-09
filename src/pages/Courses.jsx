import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { Link } from "react-router-dom";

const Courses = () => {
  const [coursesData, setCoursesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const q = query(collection(db, "courses"));
        const docSnapshot = await getDocs(q);
        const data = docSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);
        setCoursesData(sortedData);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {coursesData?.map((course) => (
        <Link
          to={`/courses/${course.id}`}
          key={course.id}
          className="px-8 flex flex-col gap-3"
        >
          <h1 className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-all ease-in-out duration-300">
            {course.title}
          </h1>
          <p className="text-gray-600 line-clamp-6">{course.content}</p>
        </Link>
      ))}
    </div>
  );
};

export default Courses;

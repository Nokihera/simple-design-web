import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../api/firebase";

const CourseDetail = () => {
  const { id } = useParams();
  const [courseGetData, setCourseGetData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const courseData = async () => {
      try {
        const docRef = doc(db, "courses", id);
        const docSnapshot = await getDoc(docRef);
        
        if (docSnapshot.exists()) {
          setCourseGetData(docSnapshot.data());
        } else {
          console.error("Course not found");
        }
      } catch (err) {
        alert("Error loading course data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    courseData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-7">
      {courseGetData ? (
        <div className="px-7 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-gray-800">{courseGetData.title}</h1>
          <p className="text-gray-600">{courseGetData.content}</p>
        </div>
      ) : (
        <div>Course not found</div>
      )}
    </div>
  );
};

export default CourseDetail;

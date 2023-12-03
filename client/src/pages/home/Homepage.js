import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import './style.css';

const HeroSection = lazy(() => import("../../components/HeroSection"));
const SubSection = lazy(() => import("../../components/SubSection"));

const API_BASE_URL = "http://localhost:4000/api";

export const Homepage = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getMovies`);
            setMoviesData(response.data.result)
        }
        catch (err) {
            console.error("Error fetching data:", err);
            setError("An error occurred while fetching data.");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            {loading && <div className="loader"><ClipLoader /></div>}
            {error && <div className="error-message">{error}</div>}

            {!loading && !error && (
                <>
                    <div>
                        {moviesData?.length > 0 &&
                            <Suspense fallback={<ClipLoader />}>
                                <HeroSection
                                    movies={moviesData[0]?.layoutTitles?.titles}
                                />
                            </Suspense>
                        }
                    </div >

                    <div className='layout'>
                        {moviesData.length > 0 &&
                            moviesData.map((data, index) => {
                                if (data.moduleType !== "HERO") {
                                    return (
                                        <Suspense key={data?.moduleId} fallback={<ClipLoader />}>
                                            <SubSection index={index} title={data?.title} movies={data?.layoutTitles?.titles} />
                                        </Suspense>
                                    )
                                }
                            })}
                    </div>
                </>
            )}
        </>
    )
}

import React, { useState, useEffect } from "react";
import axios from "axios"
import { API_URL } from "../helper";

function ScheduleList() {

    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        getData()
        console.log("schedule", schedule)
    }, [])

    const getData = () => {
        axios.get(`${API_URL}/schedule?_sort=tanggal,jamMulai&_order=asc,asc`)
            .then((res) => {
                setSchedule(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <h1>SCHEDULE LIST</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Jam Mulai</th>
                        <th scope="col">Jam Berakhir</th>
                        <th scope="col">Keterangan</th>
                    </tr>
                </thead>
                {
                    schedule.map((value, index) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th>{index+1}</th>
                                        <td>{value.tanggal}</td>
                                        <td>{value.jamMulai}</td>
                                        <td>{value.jamBerakhir}</td>
                                        <td>{value.keterangan}</td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ScheduleList;
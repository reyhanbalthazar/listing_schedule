import React, { useState } from "react";
import { Button, Input } from 'reactstrap';
import axios from "axios"

function AddSchedule() {

    const [tanggal, setTanggal] = useState("")
    const [jamMulai, setJamMulai] = useState("")
    const [jamBerakhir, setJamBerakhir] = useState("")
    const [keterangan, setKeterangan] = useState("")

    const addBtn = () => {
        const data = {
            tanggal: tanggal,
            jamMulai: jamMulai,
            jamBerakhir: jamBerakhir,
            keterangan: keterangan
        }
        console.log(data)
        // if (tanggal === "" || jamMulai === "" || jamBerakhir === "" || keterangan === "") {
        //     alert("data tidak boleh kosong")
        // } else {
        //     console.log(data)
        //     axios.post(`http://localhost:3000/schedule`, data)
        //         .then((res) => {
        //             alert("berhasil add schedule")
        //         }).catch((err) => {
        //             console.log(err)
        //         })
        // }
    }

    return (
        <div className="container">
            <h1>ADD SCHEDULE</h1>
            <div style={{border:"solid 1px", padding:"5px"}}>
                <p style={{ float: "left" }}>Pilih Tanggal</p>
                <Input type="date" onChange={e => setTanggal(e.target.value)} />
            </div>
            <div style={{ border: "solid 1px", padding: "5px" }}>
                <p style={{ float: "left" }}>hours:minute AM/PM</p>
                <Input type="time" onChange={e => setJamMulai(e.target.value)} />
            </div>
            <div style={{ border: "solid 1px", padding: "5px" }}>
                <p style={{ float: "left" }}>hours:minute AM/PM</p>
                <Input type="time" onChange={e => setJamBerakhir(e.target.value)} />
            </div>
            <div style={{ border: "solid 1px", padding: "5px" }}>
                <p style={{ float: "left" }}>Keterangan</p>
                <Input type="textarea" onChange={e => setKeterangan(e.target.value)} />
            </div>
            <Button onClick={() => addBtn()}>Add</Button>
        </div>
    )
}

export default AddSchedule;
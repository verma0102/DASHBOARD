import { useState } from "react";
const Demo = () => {
    const [records, setRecords] = useState([
        { rollNo: 1001, name: 'Pappu' },
        { rollNo: 1002, name: 'Amit' },
        { rollNo: 1003, name: 'Pawan' },
        { rollNo: 1004, name: 'Ajay' },
        { rollNo: 1005, name: 'Vinod' },
        { rollNo: 1006, name: 'Raushan' },
        { rollNo: 1007, name: 'Golu' },
        { rollNo: 1008, name: 'Aman' },
    ]);

    return (
        <>
            {
                records.map(row => (
                    <div key={row.rollNo} className="box-2">
                        <h3><span>RollNo:</span>{row.rollNo}</h3>
                        <h3>
                            <span>Name: </span>   {row.name}
                        </h3>
                    </div>
                ))
            }
        </>
    );
}
export default Demo;



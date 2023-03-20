import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { border } from "@mui/system";
import React from "react";

const tableData = [
  {
    td1: 'Fluid:',
    td2: 'Mineral Oil'
  },
  {
    td1: 'Pistons:',
    td2: 'Four'
  },
  {
    td1: 'Lever Reach Adjust:',
    td2: 'Yes'
  },
  {
    td1: 'Pad Contact Adjust:',
    td2: 'Yes'
  },
  {
    td1: 'Shifter Compatibility:	',
    td2: 'Shimano I-Spec B'
  },
  {
    td1: 'Lever Material:',
    td2: 'Aluminum'
  },
  {
    td1: 'Hose Length:',
    td2: '1000mm Front / 1700mm Rear'
  },
  {
    td1: 'Intended Use:',
    td2: 'DH/FR/EN'
  },
  {
    td1: 'Warranty:',
    td2: '2 Years'
  },
]

const TechSpecs = () => {
  return (
    <>
      <div className="my-12 max-w-7xl mx-auto font-signika">
        <h1 className="text-3xl font-bold mb-5">Technical Specifications:</h1>
        <TableContainer sx={{borderRadius: 1 }} >
          <Table aria-label='simple-table'>
            <TableBody>
              {tableData.map((data) => (
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9ff'} }}>
                  <TableCell sx={{borderBottom: 0}} ><b className="font-signika">{data.td1}</b></TableCell>
                  <TableCell sx={{borderBottom: 0 , color: '#696969'}} ><span className="font-signika">{data.td2}</span></TableCell>
                </TableRow>
              ))}    
            </TableBody>
          </Table>



        </TableContainer>
      </div>
    </>
  );
};

export default TechSpecs;


{/* <table className="mx-auto w-full rounded-lg ">
          <tbody>
            <tr className="bg-gray-100 rounded-t-lg">
              <td className="p-2 font-bold">Fluid:</td>
              <td className="p-2">Mineral Oil</td>
            </tr>
            <tr className="">
              <td className="p-2 font-bold">Pistons:</td>
              <td className="p-2">Four</td>
            </tr>
            <tr className="bg-gray-100 ">
              <td className="p-2 font-bold">Lever Reach Adjust:</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr className="">
              <td className="p-2 font-bold">Pad Contact Adjust:</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr className="bg-gray-100 ">
              <td className="p-2 font-bold">Shifter Compatibility:</td>
              <td className="p-2">Shimano I-Spec B</td>
            </tr>
            <tr className="">
              <td className="p-2 font-bold">Lever Material:</td>
              <td className="p-2">Aluminum</td>
            </tr>
            <tr className="bg-gray-100 ">
              <td className="p-2 font-bold">Hose Length:</td>
              <td className="p-2">1000mm Front / 1700mm Rear</td>
            </tr>
            <tr className="">
              <td className="p-2 font-bold">Intended Use:</td>
              <td className="p-2">DH/FR/EN</td>
            </tr>
            <tr className="bg-gray-100 ">
              <td className="p-2 font-bold">Warranty:</td>
              <td className="p-2">2 Years</td>
            </tr>
          </tbody>
        </table> */}
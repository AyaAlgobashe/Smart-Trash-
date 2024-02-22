import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dateFormatter from "../../../utils/dateFormatter.util";
import { ButtonGroup } from "react-bootstrap";
import { DeleteOutlined, Edit, Visibility } from "@mui/icons-material";

const AdminsTable = ({
  data,
  handleDeleteAdmin,
  handleOpenSideOver,
  handleToggleUpdateModal,
}) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Admin ID</TableCell>
            <TableCell className="tableCell">Username</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Role</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Created At</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ele) => (
            <TableRow key={ele?._id}>
              <TableCell className="tableCell ">
                {ele?._id.slice(0, 6)}
              </TableCell>
              <TableCell className="tableCell text-secondary">
                {ele?.username}
              </TableCell>
              <TableCell className="tableCell text-secondary">
                {ele?.name}
              </TableCell>
              <TableCell className="tableCell text-secondary">
                {ele?.email}
              </TableCell>
              <TableCell className="tableCell text-secondary">
                {ele?.role}
              </TableCell>
              <TableCell className="tableCell text-secondary">
                {ele?.phone}
              </TableCell>
              <TableCell className="tableCell text-secondary">
                {dateFormatter(ele?.createdAt)}
              </TableCell>
              <TableCell className="tableCell ">
                <ButtonGroup aria-label="Basic example" className="gap-1">
                  <button
                    onClick={() => handleOpenSideOver(ele?._id)}
                    variant="secondary"
                    className="text-success crud-btn"
                  >
                    <Visibility />
                  </button>
                  <button
                    onClick={() => handleToggleUpdateModal(ele?._id)}
                    variant="secondary"
                    className="text-warning crud-btn"
                  >
                    <Edit />
                  </button>
                  <button
                    onClick={() => handleDeleteAdmin(ele)}
                    variant="secondary"
                    className="text-danger crud-btn"
                  >
                    <DeleteOutlined />
                  </button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminsTable;

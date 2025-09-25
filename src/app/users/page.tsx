"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

// ✅ Stable data
const rows = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  username: `User${index + 1}`,
  totalHours: (index + 1) * 2,
}));

export default function UsersPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // ✅ Date pickers
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf("month"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleNotify = (username: string) => {
    alert(`📩 Notification sent to ${username}`);
  };

  // Slice rows for pagination
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="space-y-6 flex flex-col">
      {/* ✅ Title + Date Pickers row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Typography
          variant="h4"
          gutterBottom
          className="text-lg sm:text-2xl font-bold"
        >
          👤 Users
        </Typography>

        {/* Date pickers (top right on desktop) */}
        <div className="flex gap-2">
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            format="YYYY-MM-DD"
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            format="YYYY-MM-DD"
          />
        </div>
      </div>

      {/* ✅ Desktop Table */}
      <Paper className="hidden sm:flex-1 sm:flex sm:flex-col shadow-md">
        <TableContainer className="flex-1 overflow-x-auto">
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Username</strong></TableCell>
                <TableCell><strong>Total Hours</strong></TableCell>
                <TableCell align="center"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.totalHours}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() => handleNotify(row.username)}
                    >
                      Notify
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* ✅ Mobile Cards */}
      <div className="space-y-4 sm:hidden">
        {paginatedRows.map((row) => (
          <Card key={row.id} className="shadow-md">
            <CardContent className="space-y-2">
              <Typography variant="subtitle2" className="text-gray-500">
                ID: {row.id}
              </Typography>
              <Typography variant="body1"><strong>Username:</strong> {row.username}</Typography>
              <Typography variant="body1"><strong>Total Hours:</strong> {row.totalHours}</Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => handleNotify(row.username)}
              >
                Notify
              </Button>
            </CardContent>
          </Card>
        ))}

        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

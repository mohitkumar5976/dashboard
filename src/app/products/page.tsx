"use client";

import { useState } from "react";
import { Typography, Paper } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

export default function ProductsPage() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <div className="space-y-6">
      <Typography variant="h4" gutterBottom>
        🛒 Products
      </Typography>

      <Paper className="p-6 space-y-4 shadow-md">
        <Typography>Select a date:</Typography>
        <DatePicker
          label="Pick a date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          format="YYYY-MM-DD" // 👈 controls how it shows in the input
        />
      </Paper>

      {/* ✅ Display in yyyy-mm-dd */}
      <Typography>
        📅 Selected Date:{" "}
        {selectedDate ? selectedDate.format("YYYY-MM-DD") : "None"}
      </Typography>
    </div>
  );
}

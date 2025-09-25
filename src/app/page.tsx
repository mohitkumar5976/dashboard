"use client";

import { Typography, Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
  { name: "May", users: 600 },
  { name: "Jun", users: 800 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Typography
        variant="h4"
        gutterBottom
        className="text-xl sm:text-2xl font-bold"
      >
        📊 Dashboard Overview
      </Typography>

      <Paper className="p-4 sm:p-6 shadow-md">
        <Typography
          variant="h6"
          gutterBottom
          className="text-lg sm:text-xl font-semibold"
        >
          User Growth
        </Typography>

        {/* ✅ Responsive Chart */}
        <div className="w-full h-64 sm:h-80">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#1976d2"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Paper>
    </div>
  );
}

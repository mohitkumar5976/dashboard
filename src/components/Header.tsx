"use client";

import { AppBar, Toolbar, Typography, IconButton, InputBase, Avatar } from "@mui/material";
import { Search, Notifications } from "@mui/icons-material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      className="ml-64 bg-white shadow-md text-gray-900"
      sx={{ width: `calc(100% - 16rem)` }} // 16rem = 64 (sidebar width)
    >
      <Toolbar className="flex justify-between">
        {/* Left: Page title */}
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>

        {/* Middle: Search */}
        <div className="flex items-center bg-gray-100 rounded px-2 py-1 w-64">
          <Search className="text-gray-500 mr-2" fontSize="small" />
          <InputBase placeholder="Search…" className="flex-1" />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar alt="User" src="https://i.pravatar.cc/40" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

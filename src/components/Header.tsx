"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Avatar,
} from "@mui/material";
import { Search, Notifications, Menu } from "@mui/icons-material";

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <AppBar
      position="fixed"
      className="bg-white shadow-md text-gray-900 w-full md:ml-64"
      sx={{
        width: { xs: "100%", md: "calc(100% - 16rem)" }, // full width on mobile, adjusted on desktop
      }}
    >
      <Toolbar className="flex justify-between gap-4">
        {/* Left: Title + Hamburger (mobile) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Hamburger for mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            className="md:hidden"
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </div>

        {/* Middle: Search (hidden on very small screens) */}
        <div className="hidden sm:flex items-center bg-gray-100 rounded px-2 py-1 w-40 sm:w-64">
          <Search className="text-gray-500 mr-2" fontSize="small" />
          <InputBase placeholder="Search…" className="flex-1 text-sm" />
        </div>

        {/* Right: Notifications + Avatar */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar alt="User" src="https://i.pravatar.cc/40" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

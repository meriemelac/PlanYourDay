import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const settings = ['Profile', 'Settings', 'Log out'];

interface UpperBarProps {
  onAddTask: () => void;
}

export default function UpperBar({ onAddTask }: UpperBarProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        color: '#202124',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Plan Your Day"
            sx={{ width: { xs: 105, sm: 132 }, height: 'auto', display: 'block' }}
          />

          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}
          >
            <Typography
              component="a"
              href="#today"
              sx={{
                px: 1.5,
                py: 1,
                color: 'primary.main',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                borderBottom: 2,
                borderColor: 'primary.main',
              }}
            >
              My day
            </Typography>
            <Typography
              component="a"
              href="#calendar"
              sx={{
                px: 1.5,
                py: 1,
                color: 'text.secondary',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: 'text.primary' },
              }}
            >
              Calendar
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 }, ml: 'auto' }}>
            <Typography
              sx={{ display: { xs: 'none', lg: 'block' }, mr: 1, color: 'text.secondary', fontSize: 14 }}
            >
              {new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              }).format(new Date())}
            </Typography>
            <Tooltip title="Add a task">
              <IconButton
                aria-label="add a task"
                onClick={onAddTask}
                color="primary"
                sx={{
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  p: 0.75,
                  '&:hover': { backgroundColor: 'primary.50' },
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open calendar">
              <IconButton aria-label="open calendar" color="inherit">
                <CalendarMonthOutlinedIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              size="large"
              color="inherit"
              aria-label="notifications"
              sx={{ color: 'text.secondary' }}
            >
              <NotificationsNoneIcon />
            </IconButton>
            <Tooltip title="Open profile menu">
              <IconButton
                onClick={handleOpenUserMenu}
                aria-label="open profile menu"
                sx={{ p: 0.25, ml: { xs: 0, sm: 0.5 } }}
              >
                <Avatar
                  alt="Your profile"
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  YP
                </Avatar>
                <KeyboardArrowDownIcon
                  sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.secondary', fontSize: 20 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'left', fontSize: 14 }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

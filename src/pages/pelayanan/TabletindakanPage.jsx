import { Helmet } from 'react-helmet-async';

import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import { useNavigate  } from 'react-router-dom';

import { useState,useEffect } from 'react';
import axios from 'axios';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
// mock
import USERLIST from '../../_mock/user';
import BASE_URL from '../../constants/env';

// import { toToastItem } from 'react-toastify/dist/utils';


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  // { id: 'id', label: 'Id', alignRight: false },
  { id: 'nama', label: 'Aksi', alignRight: false },
  { id: 'createdAt', label: 'Tgl. Kunjungan', alignRight: false },
  { id: 'updatedAt', label: 'No. MR', alignRight: false },
  { id: 'updatedAt', label: 'No. Registrasi', alignRight: false },
  { id: 'updatedAt', label: 'Nama', alignRight: false },
  { id: 'updatedAt', label: 'Dokter', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function TabletindakanPage() {
  // const history = useHistory();
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [user,setUser] = useState([]);
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleNewMenu = () =>{
    navigate('new');
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRowsUser = page > 0 ?Math.max(0,(1 + page) * rowsPerPage - users.length):0;
  const users = applySortFilter(user, getComparator(order, orderBy), filterName)


  // const isNotFound = !filteredUsers.length && !!filterName;
  const isNotFoundUser = !users.length && !!filterName;
  const token = localStorage.getItem('token');
  const getAllUser = () =>{
    axios
    .get(`${BASE_URL}role`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getAllUser();
  }, []);
  


  return (
    <>
      <Card>
        {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  const { id, nama, createdAt,updatedAt } = row;
                  const selectedUser = selected.indexOf(id) !== -1;

                  return (
                    <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser} onClick={()=>console.log(id)} >
                      <TableCell padding="checkbox">
                        <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, id)} />
                      </TableCell>

              

                      <TableCell align="left">{nama}</TableCell>

                      <TableCell align="left">{createdAt}</TableCell>
                      <TableCell align="left">{updatedAt}</TableCell>

                      
                      <TableCell align="right">
                        <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                          <Iconify icon={'eva:more-vertical-fill'} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRowsUser > 0 && (
                  <TableRow style={{ height: 53 * emptyRowsUser }}>
                    <TableCell colSpan={3} />
                  </TableRow>
                )}
              </TableBody>

              {isNotFoundUser && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={3} sx={{ py: 3 }}>
                      <Paper
                        sx={{
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h6" paragraph>
                          Not found
                        </Typography>

                        <Typography variant="body2">
                          No results found for &nbsp;
                          <strong>&quot;{filterName}&quot;</strong>.
                          <br /> Try checking for typos or using complete words.
                        </Typography>
                      </Paper>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </>
  );
}

import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { UserList } from './UserList';
import { PostList, PostEdit, PostCreate } from './PostList';
import Dashboard from './Dashboard';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
	<Admin
		dashboard={Dashboard}
		authProvider={authProvider}
		dataProvider={dataProvider}
	>
		<Resource name="users" list={UserList} icon={UserIcon} />
		<Resource
			name="posts"
			list={PostList}
			edit={PostEdit}
			create={PostCreate}
			icon={PostIcon}
		/>
	</Admin>
);

export default App;

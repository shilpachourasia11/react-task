import React from 'react';
import {getWorkSpaces,reset,changeAvailability} from "./../../actions/homeActions";
import {connect} from "react-redux";
import {Tabs, Tab} from 'material-ui/Tabs';
import WorkSpaceList from './../../components/workSpaceList/workSpaceList'
import UltimatePaginationMaterialUi from '../../components/Table';

class App extends React.Component{

	constructor(props) {
		super(props);
		this.props = props;
		this.state={
			list: [],
			page: 0,
			total: 1
		}
	}

	componentWillReceiveProps(props){
		this.props = props;
		if(this.props.home.dataReady){
			this.props.reset()
			this.setState({
				list: this.props.home.allWorkspaces,
				total: this.props.home.totalWorkSpacePages
			})
		}
	}

	onPageChange = (page) => {
		this.setState({page});
		this.props.getWorkSpaces(page-1)
	}

	componentWillMount() {
    this.props.getWorkSpaces(0)
	}

	changeAvailability = (data) => {
		let dataToServer = {
			value: (!data.work_space.availability),
			workSpaceId: data.work_space.id
		}
		this.props.changeAvailability(dataToServer)
	}

	render(){

		return (
      <div>
        <WorkSpaceList list={this.state.list} getMoreData={this.getMoreData} changeAvailability={this.changeAvailability} loading={this.props.home.loading}/>
				<center>
					<UltimatePaginationMaterialUi
						currentPage={this.state.page}
						totalPages={this.state.total}
						onChange={this.onPageChange}
					/>
				</center>
      </div>
		)
	}
}

const mapStateToProps= (state) => {
	return{
		home: state.homeReducer,

	};
};

const mapDispatchToProps= (dispatch) => {
	return{
		getWorkSpaces: (data) => {
			dispatch(getWorkSpaces(data))
		},
		reset: () => {
			dispatch(reset())
		},
		changeAvailability: (data) => {
			dispatch(changeAvailability(data))
		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

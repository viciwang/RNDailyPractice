import React, {
	Component
} from 'react';
import {
	ListView,
	Text,
	View,
	StyleSheet,
} from 'react-native';

export default class BaseListView extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([
				'2012-02-21',
				'2016-09-22',
				'2016-09-23'
			])
		};
	}
	render() {
		return ( < View style = {
				{
					backgroundColor: 'red',
					paddingTop: 22
				}
			} >
			< ListView dataSource = {
				this.state.dataSource
			}
			renderRow = {
				(rowData) => < Text style = {
					styles.cellText
				} > {
					rowData
				} < /Text>} / >
				< /View>
			);
		}
	}

	const styles = StyleSheet.create({
		cellText: {
			color: 'black',
			// marginLeft: 20,
		}
	});
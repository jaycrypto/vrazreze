import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
    addCategory, deleteCategory, updateCategory
} from '../../actions/categoriesActions';

import EditCategory from './EditCategory';
import AddCategory from './AddCategory';

const ManageCategories = React.createClass({

    render () {
        const { categories, dispatch } = this.props;

        return (
            <div style={{maxWidth: 700, margin: '0 auto', padding: '0 10px'}}>
                <h1 style={{textAlign: 'center'}}>Управление категориями</h1>
                <div className="table-responsive">
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th style={{ width: '12%'}}>#</th>
                                <th>Наименование</th>
                                <th>Ссылка</th>
                                <th style={{ textAlign: 'center'}}>Редактировать</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.items.map((category, idx) => (
                                <tr key={idx}>
                                    <td >{ category.position }</td>
                                    <td>{ category.name }</td>
                                    <td>{ category.url }</td>
                                    <td style={{ textAlign: 'center'}}>
                                        <EditCategory
                                            category={category}
                                            onDeleteClick={categoryId => (
                                                dispatch(deleteCategory(categoryId))
                                            )}
                                            onUpdateClick={(categoryId, formData) => (
                                                dispatch(updateCategory(categoryId, formData))
                                            )}
                                            isFetchingData={categories.isFetching}
                                            serverError={categories.error}
                                            />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AddCategory
                    categories={categories}
                    onAddClick={formData => (
                        dispatch(addCategory(formData))
                    )}
                    isFetchingData={categories.isFetching}
                    serverError={categories.error}
                    />
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps)(ManageCategories);

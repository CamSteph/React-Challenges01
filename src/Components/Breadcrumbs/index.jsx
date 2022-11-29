import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

const Breadcrumbs = ({currentPage}) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to='/'>
          Home
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        {currentPage}
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Breadcrumbs

import React, { useContext }  from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { EPortfolioPages, PageContext } from '../../contexts/PageContext';
import "./Navigator.scss"

const Navigator = () => {
    const location = useLocation();
    let curPage = location && location.pathname && location.pathname.split(/\//g)[1]
    const PortfolioPages = Object.values(EPortfolioPages);

    const isPageSelected = (page: any) => {
        
        // const curPage = 
        // const isSelected = curPage > -1;
        const doesPageExist = PortfolioPages.indexOf(page) > -1;
        if (doesPageExist) {
            const isCurrentPage = page === curPage 
            return isCurrentPage;
        }
        else  {
            if (page ===  EPortfolioPages.Home && curPage === '') {
                return true;
            }
        }

        return false;
    }
    return (
        <Navbar expand="lg" className="main-nav">
            <Container>
                <Navbar.Brand href={`/${EPortfolioPages.Home}`} className={`rs-brand`} >Rocstory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-items">
                    {
                        Object.values(EPortfolioPages).map((page) => {
                            const isSelected = isPageSelected(page)
                            return (
                                <Nav.Link 
                                    href={`/${page}`}
                                    className={`nav-item ${isSelected ? 'active' : ''}`}
                                >
                                    {page}
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigator;

// return (
//     <Nav className="justify-content-center main-nav">
//         {
//             Object.values(EPortfolioPages).map((page) => {
//                 const isSelected = selPage === page
//                 return <Nav.Item 
//                     className={`${isSelected ? 'active' : ''}`}
//                     onClick={() => { handleSelectedNavItem(page)}}
//                 >
//                     {page}
//                 </Nav.Item>
//             })
//         }
//     </Nav>
// )

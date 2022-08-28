import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CModal,
  CModalBody,
  CModalContent,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText
} from "@coreui/react";
import { DocsExample } from "src/components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tables = () => {
  const [visible, setVisible] = useState(false);
  const [productName, setProduct] = useState(null);
  const [cateVisible, setCateVisible] = useState(false);
  const [category, setCategory] = useState(null);
  const [currentIndex, setIndex] = useState(null);
  const [addProductModal, setAddProductModal] = useState(false);

  const [productsData, setProductsData] = useState([
    {
      name: "Mobile",
      price: "15000",
      description: "@mdo"
    },
    {
      name: "TV",
      price: "30000",
      description: "@fat"
    },
    {
      name: "Larry the Bird",
      price: "30000",
      description: "@twitter"
    }
  ]);
  const [categoriesData, setCategoriesData] = useState([
    {
      name: "Electronics",
      description: "This is Electronics Category"
    },
    {
      name: "Furniture",
      description: "This is Furniture Category"
    },
    {
      name: "Medicine",
      description: "This is Medicine Category"
    }
  ]);

  const deleteProduct = (product, index) => {
    setVisible(true);
    setProduct(product.name);
    setIndex(index);
  };

  const deleteCategory = category => {
    setCateVisible(true);
    setCategory(category.name);
    setIndex(index);
  };

  const deleteCategoryDetails = () => {
    categoriesData.splice(currentIndex, 1);
    setCateVisible(false);
  };

  const deleteProductDetails = () => {
    productsData.splice(currentIndex, 1);
    setVisible(false);
  };

  const openAddProductModal = () => {
    setAddProductModal(true);
  };

  const addProduct= () => {
    setAddProductModal(false);
  };

  return (
    <div>
      <CRow>
        <CCol xs={12}>
          {/* <Link to="/add-product"> */}
          <CButton
            style={{ float: "right", marginBottom: "10px" }}
            color="primary"
            role="button"
            size="sm"
            onClick={() => openAddProductModal()}
          >
            Add Product
          </CButton>
          {/* </Link> */}
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Products</strong> <small>Product details</small>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {productsData.map((product, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                      <CTableDataCell>{product.name}</CTableDataCell>
                      <CTableDataCell>{product.price}</CTableDataCell>
                      <CTableDataCell>{product.description}</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/edit-product">
                          <CButton color="primary" role="button" size="sm">
                            Edit
                          </CButton>
                        </Link>&nbsp;&nbsp;
                        <CButton
                          onClick={() => deleteProduct(product, index)}
                          color="primary"
                          role="button"
                          size="sm"
                        >
                          Delete
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <Link to="/add-category">
            <CButton
              style={{ float: "right", marginBottom: "10px" }}
              component="a"
              color="primary"
              href="#"
              role="button"
              size="sm"
            >
              Add Category
            </CButton>
          </Link>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Category</strong> <small>Category details</small>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Category Name
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {categoriesData.map((category, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                      <CTableDataCell>{category.name}</CTableDataCell>
                      <CTableDataCell>{category.description}</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/edit-category">
                          <CButton color="primary" role="button" size="sm">
                            Edit
                          </CButton>
                        </Link>
                        &nbsp;&nbsp;
                        <CButton
                          onClick={() => deleteCategory(category, index)}
                          color="primary"
                          role="button"
                          size="sm"
                        >
                          Delete
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Do you want to delete this product ? </CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure, you want to delete <b> {productName} </b>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={() => deleteProductDetails()}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal visible={cateVisible} onClose={() => setCateVisible(false)}>
        <CModalHeader onClose={() => setCateVisible(false)}>
          <CModalTitle>Do you want to delete this category?</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure, you want to delete</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setCateVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={() => deleteCategoryDetails()}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Do you want to delete this product ? </CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure, you want to delete <b> {productName} </b>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={() => deleteProductDetails()}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>


      <CModal
        visible={addProductModal}
        onClose={() => setAddProductModal(false)}
      >
        <CModalHeader onClose={() => setAddProductModal(false)}>
          <CModalTitle>Add Product</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Add product</strong>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs>
                      <CFormInput
                        placeholder="Product Name"
                        aria-label="Product Name"
                      />
                    </CCol>
                    <CCol xs>
                      <CFormInput
                        placeholder="Description"
                        aria-label="Description"
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs>
                      <Link to="/base/tables">
                        <CButton
                          style={{ float: "right", marginTop: "10px" }}
                          color="primary"
                          role="button"
                          size="sm"
                          onClick={() => addProduct()}
                        >
                          Add Product
                        </CButton>
                      </Link>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default Tables;

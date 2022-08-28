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
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tables = () => {
  const [visible, setVisible] = useState(false);
  const [productName, setProductName] = useState(null);
  const [currentIndex, setIndex] = useState(null);
  const [addProductModal, setAddProductModal] = useState(false);
  const [updateProductModal, setUpdateProductModal] = useState(false);
  const [indexValue, setIndexValue] = useState(null);
  const initialData = {
    name: "",
    price: "",
    description: ""
  };
  const [product, setProduct] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const [productsData, setProductsData] = useState([
    {
      id: "0",
      name: "Mobile",
      price: "15000",
      description: "@mdo"
    },
    {
      id: "1",
      name: "TV",
      price: "30000",
      description: "@fat"
    },
    {
      id: "2",
      name: "Larry the Bird",
      price: "30000",
      description: "@twitter"
    }
  ]);

  const deleteProduct = (product, index) => {
    setVisible(true);
    setProductName(product.name);
    setIndex(index);
  };

  const deleteProductDetails = () => {
    productsData.splice(currentIndex, 1);
    setVisible(false);
  };

  const openAddProductModal = () => {
    setAddProductModal(true);
  };

  const openUpdateProductModal = (product, index) => {
    debugger;
    setIndexValue(index);
    setProduct({ ...product, product });
    setUpdateProductModal(true);
  };

  const addProduct = () => {
    productsData.push(product);
    setAddProductModal(false);
  };

  const updateProduct = () => {
    for (var i = 0; i < productsData.length; i++) {
      if (indexValue == i) {
        productsData[i] = product;
        setUpdateProductModal(false);
      }
    }
  };

  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CButton
            style={{ float: "right", marginBottom: "10px" }}
            color="primary"
            role="button"
            size="sm"
            onClick={() => openAddProductModal()}
          >
            Add Product
          </CButton>
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
                        <CButton
                          color="primary"
                          role="button"
                          size="sm"
                          onClick={() => openUpdateProductModal(product, index)}
                        >
                          Edit
                        </CButton>
                        &nbsp;&nbsp;
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
                        name="name"
                        value={product.name}
                        onChange={onInputChange}
                      />
                    </CCol>
                    <CCol xs>
                      <CFormInput
                        placeholder="Price"
                        aria-label="Price"
                        name="price"
                        value={product.price}
                        onChange={onInputChange}
                      />
                    </CCol>
                    <CCol xs>
                      <CFormInput
                        placeholder="Description"
                        aria-label="Description"
                        name="description"
                        value={product.description}
                        onChange={onInputChange}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs>
                      <CButton
                        style={{ float: "right", marginTop: "10px" }}
                        color="primary"
                        role="button"
                        size="sm"
                        onClick={() => addProduct()}
                      >
                        Add Product
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>

      <CModal
        visible={updateProductModal}
        onClose={() => setUpdateProductModal(false)}
      >
        <CModalHeader onClose={() => setUpdateProductModal(false)}>
          <CModalTitle>Update Product</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Update product</strong>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs>
                      <CFormInput
                        placeholder="Product Name"
                        aria-label="Product Name"
                        name="name"
                        value={product.name}
                        onChange={onInputChange}
                      />
                    </CCol>
                    <CCol xs>
                      <CFormInput
                        placeholder="Description"
                        aria-label="Description"
                        name="description"
                        value={product.description}
                        onChange={onInputChange}
                      />
                    </CCol>
                    <CCol xs>
                      <CFormInput
                        placeholder="Price"
                        aria-label="Price"
                        name="price"
                        value={product.price}
                        onChange={onInputChange}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs>
                      <CButton
                        style={{ float: "right", marginTop: "10px" }}
                        color="primary"
                        role="button"
                        size="sm"
                        onClick={() => updateProduct()}
                      >
                        Update Product
                      </CButton>
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

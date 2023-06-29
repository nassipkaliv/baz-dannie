import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import  Row  from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import "./style.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
  selectedBases: string[];
}

const Logistika: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    selectedBases: [],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, selectedBases: [...prevData.selectedBases, value] };
      } else {
        return { ...prevData, selectedBases: prevData.selectedBases.filter((base) => base !== value) };
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Отправка данных на сервер
    // ...
  };

  return (
    
    <>
     <Header />
     
        <Container>
            <div className='text-center h1'>В каждой Базе</div>
              <Row>
                <Col>
                  <span>Название организации</span>
                </Col>
                <Col>
                  <span>Названadие организации</span>
                </Col>
                <Col>
                  <span>Название организации</span>
                </Col>
                <Col>
                  <span>Название организации</span>
                </Col>
                
            </Row>
        </Container>
    </>
  );
};

export default Logistika;

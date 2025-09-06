import './App.css';
import DataTable from 'react-data-table-component';
import React from "react";
import styled from 'styled-components';
import { FaRegPlusSquare } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import axios from 'axios';

import config from './config';

function App() {
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    area: '',
    periodo: '',
    credito: '',
    carrera: ''
  });
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nombreCrear, setNombreCrear] = useState('');
  const [areaCrear, setAreaCrear] = useState('');
  const [periodoCrear, setPeriodoCrear] = useState('');
  const [creditoCrear, setCreditoCrear] = useState('');
  const [carreraCrear, setCarreraCrear] = useState('');

  const url = config.apiBaseUrl + ":" + config.port + "/" + config.esquema;

  const fetchData = () => {
    return axios.get(url)
    // return axios.get("http://localhost:5100/materias")
      .then((response) => setUser(response.data));
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    {
      name: "Nombre",
      selector: row => row.nombre,
      sortable: true
    },
    {
      name: "Área",
      selector: row => row.area
    },
    {
      name: "Periodo",
      selector: row => row.periodo
    },
    {
      name: "Créditos",
      selector: row => row.credito
    },
    {
      name: "Carrera",
      selector: row => row.carrera
    }
  ]

  const data = user.map(u => ({
    id: u._id,
    nombre: u.nombre,
    area: u.area,
    periodo: u.periodo,
    credito: u.creditos,
    carrera: u.carrera
  }));

  const handleRowClick = (row) => {
    setFormData({
      id: row.id,
      nombre: row.nombre,
      area: row.area,
      periodo: row.periodo,
      credito: row.credito,
      carrera: row.carrera
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  //Método para actualizar registro
  const handleActualizar = async () => {
    if (!setFormData) return;

    const datos = {
      id: formData.id,
      nombre: formData.nombre,
      area: formData.area,
      periodo: formData.periodo,
      creditos: formData.credito,
      carrera: formData.carrera
    };

    try {
      const respuesta = await fetch(url + `/${datos.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      if (!respuesta.ok) {
        throw new Error('Error en la solicitud');
      }

      const resultado = await respuesta.json();
      console.log('Respuesta del servidor:', resultado);
      alert('Materia actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('Hubo un error al actualizar la materia');
    }
  };

  //Método para crear e insertar un nuevo registro
  const abrirModal = () => {
    setMostrarModal(true);
  };

  const handleCrear = async () => {

    const datosCrear = {
      nombre: nombreCrear,
      area: areaCrear,
      periodo: periodoCrear,
      creditos: creditoCrear,
      carrera: carreraCrear
    };

    try {
      const respuesta = await fetch(url + '/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosCrear)
      });

      if (!respuesta.ok) {
        throw new Error('Error en la solicitud');
      }

      const resultado = await respuesta.json();
      console.log('Respuesta del servidor:', resultado);
      alert('Materia creada correctamente');
    } catch (error) {
      console.error('Error al crear:', error);
      alert('Hubo un error al crear la materia');
    }

    setMostrarModal(false);
  };

  return (
    <ContainerNavegacion>
      <div className="logo">
        <span>Administrar Materias</span>
        <div className='boton'>
          <button onClick={abrirModal}><FaRegPlusSquare className='icon' /></button>
        </div>

        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={5}
          onRowClicked={handleRowClick}
        />

        <br />
        <h3>Datos a modificar</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre || ''}
              onChange={handleInputChange}
              style={{ width: '250px' }}
            />
          </label>

          <br /><br />
          <label>
            Área:
            <input
              type="text"
              name="area"
              value={formData.area || ''}
              onChange={handleInputChange}
            />
          </label>

          <br /><br />
          <label>
            Período:
            <input
              type="text"
              name="periodo"
              value={formData.periodo || ''}
              onChange={handleInputChange}
            />
          </label>

          <br /><br />
          <label>
            Créditos:
            <input
              type="text"
              name="creditos"
              value={formData.credito || ''}
              onChange={handleInputChange}
            />
          </label>

          <br /><br />
          <label>
            Carrera:
            <input
              type="text"
              name="carrera"
              value={formData.carrera || ''}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <br />
        <div>
          <button onClick={handleActualizar} disabled={formData.nombre.trim() === ''}>Actualizar</button>
        </div>

        {/* Lógica para crear la ventana emergente y agregar una nueva materia */}
        <br />
        <div>
          {mostrarModal && (
            <div style={estilos.overlay}>
              <div style={estilos.modal}>
                <h2>Registrar nueva materia</h2>
                <p>Esta es una ventana emergente.</p>
                <label>
                  Nombre:
                  <input
                    type="text"
                    name="nombreCrear"
                    onChange={(e) => setNombreCrear(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Área:
                  <input
                    type="text"
                    name="areaCrear"
                    onChange={(e) => setAreaCrear(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Período:
                  <input
                    type="text"
                    name="periodoCrear"
                    onChange={(e) => setPeriodoCrear(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Créditos:
                  <input
                    type="text"
                    name="creditoCrear"
                    onChange={(e) => setCreditoCrear(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Carrera:
                  <input
                    type="text"
                    name="carreraCrear"
                    onChange={(e) => setCarreraCrear(e.target.value)}
                  />
                </label>
                <button onClick={handleCrear}>Crear</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ContainerNavegacion>
  );
}

const ContainerNavegacion = styled.div`
    background-color: #fcfcfd48;
    width:100vw;
    height: 3rem;
    // display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;

    .logo{
      span {
        color: #6C7AF3;
      }
    }

    .boton{
      button {
        border: none;
        padding: 0.5rem 2rem;
        background-color: #3F50E7;
        border-radius: 5px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
          background - color: #6C7AF3;
        }

        .icon {
          font - size: 17px;
          align-items: rigth;
        }
      }
    }
  `;

const estilos = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '300px',
    textAlign: 'center',
  },
};

export default App;

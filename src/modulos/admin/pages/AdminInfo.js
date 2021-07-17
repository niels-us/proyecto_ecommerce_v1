import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { format } from "date-fns";

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Historial de Ventas",
    },
  },
};

const AdminInfo = () => {
  const { pedido_ventas, cargando_ventas } = useSelector(
    (state) => state.ventas
  );
  let labels = [];
  let precios = [];
  let ventas_Totales = 0;
  let ventasPromedio = 0;

  if (pedido_ventas.length > 0) {
    labels = pedido_ventas.map((objVentas) => {
      let date = new Date(objVentas.pedido_fecha);
      return format(date, "MM/dd hh:mm");
    });

    precios = pedido_ventas.map((objVentas) => {
      return objVentas.pedido_pecio;
    });

    ventas_Totales = pedido_ventas.reduce((acc, item) => {
      return (acc = acc + item.pedido_pecio);
    }, 0);

    ventasPromedio = (ventas_Totales / pedido_ventas.length).toFixed();
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Historial de Ventas",
        data: precios,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main className="container">
      <h1 className="display-4 mt-5">
        Administracion de Ventas - <span className="text-danger">NUS</span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-9 shadow">
          <Bar data={data} options={options} />
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card bg-danger text-white m-1 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Ventas Totales</h5>
                  <h6 className="display-4 text-center">
                    {cargando_ventas ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      pedido_ventas.length
                    )}
                  </h6>
                </div>
              </div>
              <div className="card bg-danger text-white m-1 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Ventas en Soles</h5>
                  <h6 className="display-4 text-center">
                    {cargando_ventas ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      ventas_Totales
                    )}
                  </h6>
                </div>
              </div>
              <div className="card bg-danger text-white m-1 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Ventas Promedio</h5>
                  <h6 className="display-4 text-center">
                    {cargando_ventas ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      ventasPromedio
                    )}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminInfo;

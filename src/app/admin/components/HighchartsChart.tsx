import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button } from '@mui/material';

const options: Highcharts.Options = {
  title: {
    text: 'Grafica',
  },
  xAxis: {
    categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3],
    },
  ],
};

const handleChangeScale = (scale: 'month' | 'day' | 'week') => {
    let newCategories: string[] = [];

    switch (scale) {
      case 'month':
        newCategories = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        break;
      case 'day':
        newCategories = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
        break;
      case 'week':
        newCategories = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
        break;
    }
}

const HighchartsChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          {...props}
        />
        <Button variant="outlined" onClick={() => handleChangeScale('day')} className="border-violet-500 rounded-full text-violet text-ellipsis font-semibold m-1">Mes</Button>
        <Button variant="outlined" onClick={() => handleChangeScale('day')} className="border-violet-500 rounded-full text-violet text-ellipsis font-semibold m-1">Dia</Button>
        <Button variant="outlined" onClick={() => handleChangeScale('week')} className="border-violet-500 rounded-full text-violet text-ellipsis font-semibold m-1">Semana</Button>
    </div>
  );
};

export default HighchartsChart;
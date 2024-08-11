import { useLocation } from 'react-router-dom';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Header from '../../components/Header/Header';
import Navbar from '../../components/navbar/Navbar';
import useFetch from '../../hooks/useFetch';

import './list.css';
import { useState } from 'react';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}`);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="" className="">Destination</label>
              <input type="text" className="" placeholder='Destination' />
            </div>
            <div className="lsItem">
              <label htmlFor="" className="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)} className=''>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                // showSelectionPreview={true}
                // moveRangeOnFirstSelection={false}
                // months={2}
                ranges={date}
                minDate={new Date()}
              // direction="horizontal"
              // className='date'
              />}
            </div>
            <div className="lsItem">
              <label htmlFor="" className="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price <small className="">per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small className="">per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button className="lsButton">Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
              {data.map((item) => (

                <SearchItem item={item} key={item._id} />
              ))}
            </>}
            <SearchItem />

          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
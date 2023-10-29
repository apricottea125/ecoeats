
import './Calendar.css';
import React, {useState} from "react";


const Calendar = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
    <div>
        <div className="navbar">
          <h1>Calendar View</h1>
          <img className="listIcon" src="https://cdn-icons-png.flaticon.com/512/570/570170.png" />
        </div>
        <div className = "box">
        <table className ="calender">
          <caption>November 2023</caption>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class = "date" >1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr></tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
            </tr>
            <tr>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
            </tr>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td className="nextMonth">1</td>
              <td className="nextMonth">2</td>
            </tr>
          </tbody>
        </table>
        </div>

        {modal && (
                <div className = "modal">
                <div className = "overlay" onClick = {toggleModal}>

                </div>
                <div className = "modal-content">
                    <h2>Food Name</h2>
                    <h3>Expriration Date: </h3>
                    <h4>Location: </h4>
                    <h4>Fooda Category: </h4>
                    <button className = "close-modal" onClick = {toggleModal}>EXIT</button>
                </div>
            </div>

            )}

    </div>
    )
}

export default Calendar
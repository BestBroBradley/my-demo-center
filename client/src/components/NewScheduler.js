import { duration } from 'moment'
import { useState } from 'react'

const NewScheduler = () => {

    const [instance, setInstance] = useState({
        "timezone": "",
        "availability": [],
        "duration": 0
    })

    return (<>
        <div id="new-scheduler">
            <h2>Design a new Meeting</h2>
            <label htmlFor="sched-title">Title:</label>
            <input id="sched-title" />
            <label htmlFor="sched-duration">Duration:</label>
            <input id="sched-duration" />
            <div id="availability">
                <div id="monday">
                    <h3>Monday:</h3>
                    <label htmlFor="m-check">Available?</label>
                    <input id="m-check" type="checkbox" />
                    <div>
                        <label htmlFor="m-open">Available from:</label>
                        <select id="m-open" name="m-open">
                            <option value="0600">6 am</option>
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                        </select>
                        <label htmlFor="m-close">Available until:</label>
                        <select id="m-close" name="m-close">
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                            <option value="1900">7 pm</option>
                        </select>
                    </div>
                </div>
                <div id="tuesday">
                    <h3>Tuesday:</h3>
                    <label htmlFor="t-check">Available?</label>
                    <input id="t-check" type="checkbox" />
                    <div>
                        <label htmlFor="t-open">Available from:</label>
                        <select id="t-open" name="t-open">
                            <option value="0600">6 am</option>
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                        </select>
                        <label htmlFor="t-close">Available until:</label>
                        <select id="t-close" name="t-close">
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                            <option value="1900">7 pm</option>
                        </select>
                    </div>
                </div>
                <div id="wednesday">
                    <h3>Wednesday:</h3>
                    <label htmlFor="w-check">Available?</label>
                    <input id="w-check" type="checkbox" />
                    <div>
                        <label htmlFor="w-open">Available from:</label>
                        <select id="w-open" name="w-open">
                            <option value="0600">6 am</option>
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                        </select>
                        <label htmlFor="w-close">Available until:</label>
                        <select id="w-close" name="w-close">
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                            <option value="1900">7 pm</option>
                        </select>
                    </div>
                </div>
                <div id="thursday">
                    <h3>Thursday:</h3>
                    <label htmlFor="r-check">Available?</label>
                    <input id="r-check" type="checkbox" />
                    <div>
                        <label htmlFor="r-open">Available from:</label>
                        <select id="r-open" name="r-open">
                            <option value="0600">6 am</option>
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                        </select>
                        <label htmlFor="r-close">Available until:</label>
                        <select id="r-close" name="r-close">
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                            <option value="1900">7 pm</option>
                        </select>
                    </div>
                </div>
                <div id="friday">
                    <h3>Friday:</h3>
                    <label htmlFor="f-check">Available?</label>
                    <input id="f-check" type="checkbox" />
                    <div>
                        <label htmlFor="f-open">Available from:</label>
                        <select id="f-open" name="f-open">
                            <option value="0600">6 am</option>
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                        </select>
                        <label htmlFor="f-close">Available until:</label>
                        <select id="f-close" name="f-close">
                            <option value="0700">7 am</option>
                            <option value="0800">8 am</option>
                            <option value="0900">9 am</option>
                            <option value="1000">10 am</option>
                            <option value="1100">11 am</option>
                            <option value="1200">12 pm</option>
                            <option value="1300">1 pm</option>
                            <option value="1400">2 pm</option>
                            <option value="1500">3 pm</option>
                            <option value="1600">4 pm</option>
                            <option value="1700">5 pm</option>
                            <option value="1800">6 pm</option>
                            <option value="1900">7 pm</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default NewScheduler
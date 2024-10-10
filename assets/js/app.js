'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'kaQi1xW1sw2G4UXswXJsnqsuslmbvVMI';

    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const calculateBtn = document.getElementById('calculateBtn');
    const loader = document.getElementById('loading');
    const resultTable = document.getElementById('resultTable');
    const resultBody = document.getElementById('resultBody');
    const tabsBtn = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab');
    const yearSelect = document.getElementById('year-select');
    const holidaysTable = document.getElementById('holidays-table');
    const errorTab1 = document.getElementById('error-tab1');
    const errorTab2 = document.getElementById('error-tab2');
    const countrySelectElement = document.getElementById('country-select');
    const dateHeader = document.getElementById('date-header');
    const sortArrow = document.getElementById('sort-arrow');

    const presetRadios = document.querySelectorAll('input[name="preset"]');
    const daysRadios = document.querySelectorAll('input[name="days"]');
    const calculationRadios = document.querySelectorAll('input[name="calculation"]');

    let countryChoices = null;
    let yearChoices = null;
    let selectedCountryName = '';
    let countriesLoaded = false;
    let isSorting = true;

    startDateInput.addEventListener('change', handleStartDateChange);
    endDateInput.addEventListener('change', handleEndDateChange);
    calculateBtn.addEventListener('click', handleCalculation);
    dateHeader.addEventListener('click', handleSorting);

    const currentYear = new Date().getFullYear();

    loadHistory();


    function handleSorting() {
        sortHolidaysByDate(isSorting);

        if (isSorting) {
            sortArrow.textContent = '▲';
        } else {
            sortArrow.textContent = '▼';
        }

        isSorting = !isSorting;
    }

    function sortHolidaysByDate(sorting) {
        const tbody = holidaysTable.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            const dateA = new Date(a.cells[0].textContent);
            const dateB = new Date(b.cells[0].textContent);

            if (sorting) {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));
    }

    tabsBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            showTab(event, button.getAttribute('data-tab'));
        });
    });

    async function showTab(event, tabName) {
        tabContents.forEach(tab => tab.classList.remove('active'));

        tabsBtn.forEach(btn => btn.classList.remove('active'));

        document.getElementById(tabName).classList.add('active');
        event.currentTarget.classList.add('active');

        if (tabName === 'holidayTab' && !countriesLoaded) {
            await fetchCountries();
        }
    }

    function handleStartDateChange() {
        const startDate = new Date(startDateInput.value);
        if (!isNaN(startDate.getTime())) {
            endDateInput.disabled = false;
            presetRadios.forEach(radio => radio.disabled = false);
            daysRadios.forEach(radio => radio.disabled = false);
            calculationRadios.forEach(radio => radio.disabled = false);
            endDateInput.min = startDateInput.value;
            errorTab1.style.display = 'none';
        }
    }

    function handleEndDateChange() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (endDate < startDate) {
            endDateInput.value = '';
            showError('End date must be later than start date!', errorTab1);
        }

        presetRadios.forEach(radio => radio.checked = false);
    }

    presetRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const presetDays = parseInt(radio.value);
            const startDate = new Date(startDateInput.value);
            if (!isNaN(startDate.getTime())) {
                const newEndDate = new Date(startDate);
                newEndDate.setDate(startDate.getDate() + presetDays);
                endDateInput.value = newEndDate.toISOString().split('T')[0];
            }
        });
    });

    function handleCalculation() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            showError('Please select both dates!', errorTab1);
            return;
        }

        loader.style.display = 'block';

        setTimeout(() => {
            const difference = calculateDateDifference(startDate, endDate);
            const resultRow = `<tr>
                <td>${startDateInput.value}</td>
                <td>${endDateInput.value}</td>
                <td>${difference}</td>
            </tr>`;

            resultBody.innerHTML = resultRow;
            resultTable.style.display = 'table';
            saveResultToHistory(startDateInput.value, endDateInput.value, difference);
            loader.style.display = 'none';
        }, 3000);
    }

    function calculateDateDifference(startDate, endDate) {
        const daysOption = document.querySelector('input[name="days"]:checked').value;
        const unit = document.querySelector('input[name="calculation"]:checked').value;

        let differenceInMilliseconds = endDate - startDate;
        let differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

        if (daysOption === 'weekdays') {
            differenceInDays = calculateWeekdays(startDate, endDate);
        } else if (daysOption === 'weekends') {
            differenceInDays = calculateWeekends(startDate, endDate);
        }

        switch (unit) {
            case 'days':
                return `${differenceInDays} ${pluralize(differenceInDays, 'day', 'days')}`;
            case 'hours':
                const hours = differenceInDays * 24;
                return `${hours} ${pluralize(hours, 'hour', 'hours')}`;
            case 'minutes':
                const minutes = differenceInDays * 24 * 60;
                return `${minutes} ${pluralize(minutes, 'minute', 'minutes')}`;
            case 'seconds':
                const seconds = differenceInDays * 24 * 60 * 60;
                return `${seconds} ${pluralize(seconds, 'second', 'seconds')}`;
            default:
                return `${differenceInDays} ${pluralize(differenceInDays, 'day', 'days')}`;
        }
    }

    function pluralize(value, singular, plural) {
        return value === 1 ? singular : plural;
    }

    function calculateWeekdays(startDate, endDate) {
        let count = 0;
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const day = currentDate.getDay();
            if (day !== 0 && day !== 6) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return count;
    }

    function calculateWeekends(startDate, endDate) {
        let count = 0;
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const day = currentDate.getDay();
            if (day === 0 || day === 6) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return count;
    }

    function saveResultToHistory(startDate, endDate, result) {
        let history = JSON.parse(localStorage.getItem('dateCalcHistory')) || [];
        history.unshift({ startDate, endDate, result });
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        localStorage.setItem('dateCalcHistory', JSON.stringify(history));
        loadHistory();
    }

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('dateCalcHistory')) || [];
        if (history.length === 0) {
            resultTable.style.display = 'none';
            return;
        }

        resultBody.innerHTML = '';
        history.forEach(record => {
            const row = `<tr>
                <td>${record.startDate}</td>
                <td>${record.endDate}</td>
                <td>${record.result}</td>
            </tr>`;
            resultBody.innerHTML += row;
        });
        resultTable.style.display = 'table';
    }


    function initChoices() {
        countryChoices = new Choices(countrySelectElement, {
            searchEnabled: true,
            itemSelectText: '',
            shouldSort: false,
            placeholderValue: 'Select a country...',
            searchPlaceholderValue: 'Search for a country...',
        });

        yearChoices = new Choices(yearSelect, {
            searchEnabled: true,
            itemSelectText: '',
            shouldSort: false,
            searchPlaceholderValue: 'Search for a year...',
        });
    }

    function populateYearSelect() {
        const fragment = document.createDocumentFragment();
        for (let year = 2001; year <= 2049; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.text = year;
            if (year === currentYear) {
                option.selected = true;
            }
            fragment.appendChild(option);
        }
        yearSelect.appendChild(fragment);
    }

    async function fetchCountries() {
        const apiURL = `https://calendarific.com/api/v2/countries?api_key=${apiKey}`;
        try {
            const result = await axios.get(apiURL);
            const countries = result.data.response.countries;

            if (!countries || !Array.isArray(countries) || countries.length === 0) {
                showError('No data for the selected country.', errorTab2);
                return;
            }

            countryChoices.clearStore();

            const options = countries.map(country => ({
                value: country['iso-3166'],
                label: country.country_name,
            }));
            countryChoices.setChoices(options, 'value', 'label', true);

            countriesLoaded = true;
        } catch (error) {
            handleError(error);
        }
    }

    function handleError(error) {
        if (error.response && error.response.status === 401) {
            showError('Invalid API key.', errorTab2);
        } else {
            showError(error.message || 'An unknown error occurred.', errorTab2);
        }
    }

    async function fetchHolidays(country, year) {
        const apiUrl = `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch holidays.');
            }
            const data = await response.json();
            const holidays = data.response.holidays;

            if (!holidays || holidays.length === 0) {
                showError(`No data available for ${selectedCountryName} in ${year}.`, errorTab2);
                return;
            }

            displayHolidays(holidays);
        } catch (error) {
            handleError(error);
        }
    }

    function displayHolidays(holidays) {
        const tbody = holidaysTable.querySelector('tbody');
        tbody.innerHTML = '';

        const fragment = document.createDocumentFragment();
        holidays.forEach(holiday => {
            const row = document.createElement('tr');
            const dateCell = document.createElement('td');
            const nameCell = document.createElement('td');

            dateCell.textContent = holiday.date.iso.slice(0, 10);
            nameCell.textContent = holiday.name;

            row.appendChild(dateCell);
            row.appendChild(nameCell);
            fragment.appendChild(row);
        });
        tbody.appendChild(fragment);

        holidaysTable.style.display = 'table';
        errorTab2.style.display = 'none';
    }

    function showError(message, errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'inline-block';

        if (errorElement.id === 'error-tab2') {
            holidaysTable.style.display = 'none';
        }
    }

    countrySelectElement.addEventListener('change', async function () {
        const selectedOption = countrySelectElement.options[countrySelectElement.selectedIndex];
        selectedCountryName = selectedOption.text;

        if (this.value) {
            yearChoices.enable();
            if (yearSelect.value) {
                await fetchHolidays(this.value, yearSelect.value);
            }
        } else {
            yearChoices.disable();
            holidaysTable.style.display = 'none';
        }
    });

    yearSelect.addEventListener('change', async function () {
        const countryValue = countrySelectElement.value;
        if (countryValue && yearSelect.value) {
            await fetchHolidays(countryValue, yearSelect.value);
        }
    });

    (function init() {
        populateYearSelect();
        initChoices();
    })();
});

window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
};
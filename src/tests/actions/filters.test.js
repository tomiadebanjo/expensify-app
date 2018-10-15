import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should generate setTextFilter object', () => {
  const action = setTextFilter('boy');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'boy'
  });
})

test('should generate setTextFilter object', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
    text: ''
	});
});

test('should return sortByAmount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should return sortByDate', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

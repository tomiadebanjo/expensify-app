import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should add expense', () => {
  const expense = {
    description: 'git log',
    amount: 2900,
    createdAt: 2000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const updates = { description: 'Loud Money' }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], { ...expenses[1], ...updates}, expenses[2] ]);
})

test('should not edit expense if expense not found', () => {
  const updates = { description: 'Loud Money' }
  const id = '-6'
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHabits } from '../store/habitsSlice';

const HabitList = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits);

  useEffect(() => {
    fetch('http://localhost:5000/api/habits')
      .then((res) => res.json())
      .then((data) => dispatch(setHabits(data)));
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de Hábitos</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;

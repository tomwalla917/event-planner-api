import express, { Application } from 'express';
import { connectDB } from './config/db';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
	res.json({
		message: 'Event planner workshop',
		status: 'Starter scaffold ready',
		nextSteps: [
			
		],
		requiredPopulationRoute: ''
	});
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;

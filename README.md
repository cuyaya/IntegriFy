# IntegriFy
Deepfake Detection Web System using Explainable AI

🎯 Important Shared Agreements (both must follow exactly)
🔧 Element	Suria (Frontend)	Putri (Backend)	Must Match
API Endpoint	Calls to → http://127.0.0.1:5000/api/upload	Flask route → /api/upload	✅ Yes
API Response Format	Reads JSON {status, message, result, explanation}	Returns JSON in that format	✅ Yes
CORS setup	Frontend connects from browser → must enable in Flask	from flask_cors import CORS; CORS(app)	✅ Yes
Firebase Project	Uses same Firebase project config (API key, project ID)	(Optional, may not need Firebase)	✅ Yes (if both use)
Repository Folder	frontend/	backend/	✅ Shared repo
Branch	Both can stay on main	Same	✅ Yes

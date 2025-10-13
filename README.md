# IntegriFy
Deepfake Detection Web System using Explainable AI


| 🔧 Element              | Suria (Frontend)                                        | Putri (Backend)                          | Must Match          |
| ----------------------- | ------------------------------------------------------- | ---------------------------------------- | ------------
| **API Endpoint**        | Calls to → `http://127.0.0.1:5000/api/upload`           | Flask route → `/api/upload`              | ✅ Yes     
| **API Response Format** | Reads JSON `{status, message, result, explanation}`     | Returns JSON in that format              | ✅ Yes     
| **CORS setup**          | Frontend connects from browser → must enable in Flask   | `from flask_cors import CORS; CORS(app)` | ✅ Yes     
| **Firebase Project**    | Uses same Firebase project config (API key, project ID) | (Optional, may not need Firebase)        | ✅ Yes (if both use) |
| **Repository Folder**   | `frontend/`                                             | `backend/`                               | ✅ Shared repo       |
| **Branch**              | Both can stay on `main`                                 | Same                                     | ✅ Yes    


Shared API Contract (Critical Agreement)
You and Putri must use the same names for these items throughout the project:

| Purpose                     | Variable / Value                                          | Description                                 |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------- |
| **API Base URL**            | `https://api.integrify-model.com`                         | (Putri will provide actual URL once hosted) |
| **Endpoint Path**           | `/detect`                                                 | Must match on both sides                    |
| **HTTP Method**             | `POST`                                                    | Always POST                                 |
| **Accepted Formats**        | `.mp4`, `.mov`, `.avi`, `.mp3`, `.wav`                    | Both sides must agree                       |
| **Request Keys**            | `file_url`, `media_type`, `user_id`                       | Use exact names, case-sensitive             |
| **Response Keys**           | `prediction`, `confidence`, `explanation`, `processed_at` | Same JSON format                            |
| **Explanation Object Keys** | `method`, `description`, `heatmap_url`                    | Must appear in response JSON                |
| **Confidence Value Range**  | `0.0 - 1.0`                                               | Always normalized between 0 and 1           |
| **Prediction Values**       | `"REAL"` or `"FAKE"`                                      | Uppercase only                              |
| **Timestamp Format**        | ISO 8601 (`YYYY-MM-DDTHH:MM:SSZ`)                         | Example: `2025-10-13T08:30:00Z`             |
| **Authentication (later)**  | `api_key` in header                                       | optional; same shared string when used      |


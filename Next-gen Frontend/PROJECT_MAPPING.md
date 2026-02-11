
### NextGen AI Social Media App - Frontend Workflow

This frontend implementation is designed to visually represent the backend architecture described in the project diagrams.

#### 1. Login Flow (Matches Sequence Diagram)
- **User Action**: Clicks "Login".
- **Visual Feedback**:
  1. `Sending credentials...` (Frontend -> Backend)
  2. `Verifying...` (Backend Logic)
  3. `AI System initializing...` (Backend -> AI Module)
  4. Redirection to Home.

#### 2. Posting Flow (Matches Flow Diagram)
- **User Action**: Clicks "Post".
- **Visual Feedback**: A pipeline progress bar appears showing:
  1. **Backend**: Receiving input.
  2. **AI**: Processing content (Toxicity check, tagging).
  3. **Database**: Saving the processed data.
  4. **Feed**: Updating the UI from the "Database".

#### 3. Content Reporting (Matches Use Case Diagram)
- **User Action**: Clicks "Report" on a post.
- **Visual Feedback**: "Sent to AI Moderation Review".
- **Admin View**: The reported post appears in the `AI Studio` (Admin Dashboard) for review.

#### 4. Architecture Readiness
- The frontend is built with React and independent components (`Post`, `Profile`, `Sidebar`) making it easy to connect to a real Node.js/Python backend later.
- `api` calls are currently simulated using `setTimeout`, which should be replaced with `fetch` or `axios` calls to your real endpoints.

#### Next Steps for Developer
- **Backend**: Implement the API endpoints for `/login`, `/post`, and `/report`.
- **AI**: Connect your Python AI scripts (for NLP/image processing) to these endpoints.
- **Database**: Connect MongoDB/SQL to store the posts.

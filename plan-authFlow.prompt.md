## Plan: Add auth pages to nha-tro rental-house

TL;DR: Implement the requested authentication flow by filling in `register.html`, improving `login.html`, and adding a new `profile.html` page in `rental-house`, then update shared CSS to support the new auth UI.

**Steps**
1. Confirm the project target is `c:\Users\duong\Documents\GitHub\DVt07\nha-tro\rental-house` and that auth pages should remain static HTML/CSS.
2. Create or update `register.html` with:
   - Username field
   - Email field
   - Password field
   - Confirm Password field
   - Social login section (matching existing login page style)
   - Submit button and a link back to `login.html`
3. Update `login.html` to include:
   - Username/Email field
   - Password field
   - Forgot Password link
   - A link to `register.html`
   - Keep the existing social login options and login button style
4. Add `profile.html` with:
   - Avatar placeholder
   - Full Name
   - Email
   - Phone
   - Birthday
   - Edit Profile button
   - Change Password button
   - Logout button
   - Optionally a small profile info card layout consistent with the site
5. Modify `assets/css/style.css` to support the new auth page styles:
   - `.auth-card`, `.login-form`, `.register-form`, `.profile-card`, `.avatar`, `.profile-actions`
   - Reuse existing button classes (`.button`, `.button primary`, `.button secondary`)
   - Ensure mobile-friendly layout for form fields and profile sections
6. Verify the pages with a browser preview:
   - `register.html` contains the full registration field set
   - `login.html` contains login fields plus forgot password and register links
   - `profile.html` shows avatar, profile details, edit/change/logout actions

**Relevant files**
- `c:\Users\duong\Documents\GitHub\DVt07\nha-tro\rental-house\register.html` (create/update)
- `c:\Users\duong\Documents\GitHub\DVt07\nha-tro\rental-house\login.html` (update)
- `c:\Users\duong\Documents\GitHub\DVt07\nha-tro\rental-house\profile.html` (new)
- `c:\Users\duong\Documents\GitHub\DVt07\nha-tro\rental-house\assets\css\style.css` (update)

**Verification**
1. Open each page in browser and confirm the expected form fields and action buttons are present.
2. Confirm `register.html` includes Username, Email, Password, Confirm Password.
3. Confirm `login.html` includes Username/Email, Password, Forgot Password, and a Register link.
4. Confirm `profile.html` includes Avatar, Full Name, Email, Phone, Birthday, Edit Profile, Change Password, Logout.

**Decisions**
- Keep the implementation as static HTML/CSS in the existing `rental-house` site.
- Do not add backend authentication logic unless the user specifically requests it.
- Use existing UI conventions from `login.html` and `assets/css/style.css`.

**Further Considerations**
- If you want a separate forgotten-password flow, add a `forgot-password.html` page later.
- If validation or simulated auth behavior is desired, create a simple `assets/js/auth.js` after the UI is in place.

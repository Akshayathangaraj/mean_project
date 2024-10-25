// Function to handle navigation between different pages
function navigate(page) {
    // Hide all sections
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('signupPage').style.display = 'none';
    document.getElementById('trendingPage').style.display = 'none';
    document.getElementById('menPage').style.display = 'none';
    document.getElementById('womenPage').style.display = 'none';
    document.getElementById('childrenPage').style.display = 'none';
    document.getElementById('eldersPage').style.display = 'none';
    

    // Show the selected section
    switch (page) {
      case 'signup':
        document.getElementById('signupPage').style.display = 'block';
        break;
      case 'trending':
        document.getElementById('trendingPage').style.display = 'block';
        break;
      case 'men':
        document.getElementById('menPage').style.display = 'block';
        break;
      case 'women':
        document.getElementById('womenPage').style.display = 'block';
        break;
      case 'children':
        document.getElementById('childrenPage').style.display = 'block';
        break;
      case 'elders':
        document.getElementById('eldersPage').style.display = 'block';
        break;
      default:
        document.getElementById('homePage').style.display = 'block';
    }
  }
  
// Function to validate the sign-up form
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    alert('Please fill in all fields');
    return false;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}


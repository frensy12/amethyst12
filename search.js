document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchQuery = document.getElementById("searchInput").value;
    search(searchQuery);
  });
  
  function search(query) {
    // Implement your search algorithm here
    // You can use external APIs or crawl websites to retrieve search results
  
    // For this example, we'll just return some dummy results
    var dummyResults = [
      { title: "Spillespill", url: "https://www.spillespill.no/" },
      { title: "Result 2", url: "https://example.com/result2" },
      { title: "Result 3", url: "https://example.com/result3" }
    ];
  
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "<h2>Search Results for: " + query + "</h2>";
  
    if (dummyResults.length === 0) {
      searchResults.innerHTML += "<p>No results found. Your search engine skills need improvement!</p>";
    } else {
      dummyResults.forEach(function(result) {
        searchResults.innerHTML += "<p><a href='" + result.url + "'>" + result.title + "</a></p>";
      });
    }
  }
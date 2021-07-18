from BeautifulSoup import BeautifulSoup
soup = BeautifulSoup(html_string)
for link in soup.findAll('a')
    link['src'] = 'New src'
html_string = str(soup)
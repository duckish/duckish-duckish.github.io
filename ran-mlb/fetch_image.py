# import urllib2
# import simplejson
# import cStringIO

# fetcher = urllib2.build_opener()
# searchTerm = 'parrot'
# startIndex = 0
# searchUrl = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + searchTerm + "&start=" + startIndex
# f = fetcher.open(searchUrl)
# deserialized_output = simplejson.load(f)


# import urllib2.request

# response = urllib2.urlopen("http://www.google.com")
# html = response.read()
# print(html)

query_string = 'hockey'
from bing_image_downloader import downloader
downloader.download(query_string, limit=50,  
                    output_dir='dataset', 
                    adult_filter_off=True, 
                    force_replace=False, timeout=60, verbose=True)
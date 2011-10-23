DOCFILES = docs
HTMLFILES = html

DOCS = \
	${DOCFILES}/intro.md\
	${DOCFILES}/outro.md

doc: 
	@markdown ${DOCS} > readme.md

clean:
	@rm -f index.html

build: clean doc
	@cat ${HTMLFILES}/intro.html Readme.md ${HTMLFILES}/outro.html > index.html
	@echo "Successfully build readme.md and index.html"

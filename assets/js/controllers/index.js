import { application } from 'controllers/application'
console.log('testing before')
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)
console.log('testing after')
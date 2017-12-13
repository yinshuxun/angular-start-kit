import { Controller, RequestMapping } from './koa-declaration'

@Controller
@RequestMapping('/index')
class KoaDeclaration {
}

new KoaDeclaration()
import TagsModel from '../models/TagsModel'
class TagsController {
    async getTags(ctx){
        let tags = await TagsModel.selTags();
        ctx.body = tags;
    }
}
export default new TagsController
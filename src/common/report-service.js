import BaseService from './base-service';

export default class ReportService extends BaseService {
  constructor() {
    super();
  }

  async create(id, type, content, report_type) {
    const res = await this.request(
      '',
      {id, type, content, report_type},
      'POST'
    )
  }
}
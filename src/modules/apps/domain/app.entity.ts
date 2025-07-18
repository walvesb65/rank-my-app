export type AppPlatform = "ios" | "android";

export class AppEntity {
  public readonly id: string;
  public name: string;
  public category: string;
  public platform: AppPlatform;
  public url: string;

  constructor(
    id: string,
    name: string,
    category: string,
    platform: AppPlatform,
    url: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.platform = platform;
    this.url = url;

    this.validate();
  }

  private validate(): void {
    if (!this.name || this.name.length < 2) {
      throw new Error("App name must be at least 2 characters");
    }
  }
}
